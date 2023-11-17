export class Calendar {
    id!: number;
    dateDebut!: string;
    dateFin!: string;
    eventType!: string;
    eventName!: string;
    user_id!: number;
    public toString(): string {
      return `Event ID: ${this.id}\nEvent Name: ${this.eventName}\nEvent Type: ${this.eventType}\nStart Date: ${this.dateDebut}\nEnd Date: ${this.dateFin}\nUser ID: ${this.user_id}`;
    }
}
  