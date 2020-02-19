export class FileAboutUs {
      fileId:   string;
      image:    string;
      mimeType: string;
      name:     string;
      size:     number;
      isDeleted: boolean;
      isMain: boolean;

      /**
       * Mappeo to FileAbout object
       */
      public static fromFileAboutUs(imageResult: any): FileAboutUs {
            const fileAboutUs = new FileAboutUs();
            fileAboutUs.fileId = '',
            fileAboutUs.name = imageResult.name,
            fileAboutUs.mimeType = imageResult.type,
            fileAboutUs.isDeleted = false,
            fileAboutUs.isMain = false,
            fileAboutUs.size = Number(imageResult.size);
            return fileAboutUs;
      }


      public static fromFileFailed(imageResult: any): FileAboutUs {
            const fileAboutUs = new FileAboutUs();
            fileAboutUs.name = imageResult.name,
            fileAboutUs.mimeType = imageResult.type,
            fileAboutUs.size = Number(imageResult.size);
            return fileAboutUs;
      }

}
