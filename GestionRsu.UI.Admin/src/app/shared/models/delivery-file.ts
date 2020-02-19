export class DeliveryFile {
      fileId:   string;
      image:    string;
      mimeType: string;
      name:     string;
      size:     number;
      isDeleted: boolean;

      /**
       * Mapper to FileAbout object
       */
      public static fromFileAboutUs(imageResult: any): DeliveryFile {
            const fileAboutUs = new DeliveryFile();
            fileAboutUs.fileId = '',
            fileAboutUs.name = imageResult.name,
            fileAboutUs.mimeType = imageResult.type,
            fileAboutUs.isDeleted = false,
            fileAboutUs.size = Number(imageResult.size);
            return fileAboutUs;
      }


      public static fromFileFailed(imageResult: any): DeliveryFile {
            const fileAboutUs = new DeliveryFile();
            fileAboutUs.name = imageResult.name,
            fileAboutUs.mimeType = imageResult.type,
            fileAboutUs.size = Number(imageResult.size);
            return fileAboutUs;
      }

}
