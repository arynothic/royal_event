type ChatHistory = {
  role: "user" | "model";
  parts: string[];
}[];

export interface ChatSession {
  messages: ChatHistory;
  lastUpdated: number;
}

class ChatStore {
  private sessions: Map<string, ChatSession>;
  private readonly MAX_AGE = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

  constructor() {
    this.sessions = new Map();
  }

  get(sessionId: string): ChatSession | undefined {
    const session = this.sessions.get(sessionId);
    if (session && Date.now() - session.lastUpdated > this.MAX_AGE) {
      this.sessions.delete(sessionId);
      return undefined;
    }
    return session;
  }

  set(sessionId: string, messages: ChatHistory): void {
    this.sessions.set(sessionId, {
      messages,
      lastUpdated: Date.now(),
    });
  }

  addMessage(sessionId: string, role: "user" | "model", content: string): void {
    const session = this.get(sessionId);
    const messages = session?.messages || [];
    
    messages.push({
      role,
      parts: [content],
    });

    this.set(sessionId, messages);
  }

  getMessages(sessionId: string): ChatHistory {
    return this.get(sessionId)?.messages || [];
  }

  // Clean up expired sessions
  cleanup(): void {
    const now = Date.now();
    for (const [id, session] of this.sessions.entries()) {
      if (now - session.lastUpdated > this.MAX_AGE) {
        this.sessions.delete(id);
      }
    }
  }
}

// Create a singleton instance
export const chatStore = new ChatStore();

// Run cleanup every hour
setInterval(() => chatStore.cleanup(), 60 * 60 * 1000);
