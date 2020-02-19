export class FileBanner {
      fileId:   string;
      image:    string;
      mimeType: string;
      name:     string;
      size:     number;
      isDeleted: boolean;

      /**
       * Mapper to FileAbout object
       */
      public static fromFileAboutUs(imageResult: any): FileBanner {
            const fileAboutUs = new FileBanner();
            fileAboutUs.fileId = '',
            fileAboutUs.name = imageResult.name,
            fileAboutUs.mimeType = imageResult.type,
            fileAboutUs.isDeleted = false,
            fileAboutUs.size = Number(imageResult.size);
            return fileAboutUs;
      }


      public static fromFileFailed(imageResult: any): FileBanner {
            const fileAboutUs = new FileBanner();
            fileAboutUs.name = imageResult.name,
            fileAboutUs.mimeType = imageResult.type,
            fileAboutUs.size = Number(imageResult.size);
            return fileAboutUs;
      }

}
