export class PaymentMethodFile {
      fileId:   string;
      image:    string;
      mimeType: string;
      name:     string;
      size:     number;
      isDeleted: boolean;

      /**
       * Mapper to FileAbout object
       */
      public static fromFileAboutUs(imageResult: any): PaymentMethodFile {
            const fileAboutUs = new PaymentMethodFile();
            fileAboutUs.fileId = '',
            fileAboutUs.name = imageResult.name,
            fileAboutUs.mimeType = imageResult.type,
            fileAboutUs.isDeleted = false,
            fileAboutUs.size = Number(imageResult.size);
            return fileAboutUs;
      }


      public static fromFileFailed(imageResult: any): PaymentMethodFile {
            const fileAboutUs = new PaymentMethodFile();
            fileAboutUs.name = imageResult.name,
            fileAboutUs.mimeType = imageResult.type,
            fileAboutUs.size = Number(imageResult.size);
            return fileAboutUs;
      }

}
