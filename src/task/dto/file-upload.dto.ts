export class FileUploadDto {
    constructor(
        public statusCode: Number,
        public data: any = undefined,
        public message: string = 'Success',
    ) {}
}
