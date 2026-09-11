export abstract class ICommandsService {
    public abstract getCommandMention(name: string): string;
    public abstract getAllCommandMentions(): Record<string, string>;
    public abstract fetchCommandMentions(): Promise<void>;
}
