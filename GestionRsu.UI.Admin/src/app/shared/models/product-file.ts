export class ProductFile {
      contentType: string;
      name:     string;
      size:     number;
      isDeleted: boolean;
      productId: string;
      urlImage: string;
      /**
       * Mappeo to FileAbout object
       */
      public static fromFileProduct(imageResult: any): ProductFile {
            const fileAboutUs = new ProductFile();
            fileAboutUs.name = imageResult.name;
            fileAboutUs.contentType = imageResult.type;
            fileAboutUs.isDeleted = false;
            fileAboutUs.size = Number(imageResult.size);
            return fileAboutUs;
      }


      public static fromFileFailed(imageResult: any): ProductFile {
            const fileAboutUs = new ProductFile();
            fileAboutUs.name = imageResult.name,
            fileAboutUs.contentType = imageResult.type,
            fileAboutUs.size = Number(imageResult.size);
            return fileAboutUs;
      }

}
