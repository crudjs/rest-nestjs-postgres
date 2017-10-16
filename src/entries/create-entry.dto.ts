export class CreateEntryDto {
  readonly title: string;
  readonly body: string;
  readonly authorId: string;
  readonly categoryId: string;
  readonly tags: string[];
}
