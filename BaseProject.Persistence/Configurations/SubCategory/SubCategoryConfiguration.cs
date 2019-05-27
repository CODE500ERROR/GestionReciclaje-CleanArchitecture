using System;
using System.Collections.Generic;
using System.Text;
using BaseProject.Domain;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Whoever.Data.EntityFramework;

namespace BaseProject.Persistence.Configurations.SubCategoryConfiguration
{
    public class SubCategoryConfiguration : BaseEntityTypeConfiguration<SubCategory>
    {

        public override void Configure(EntityTypeBuilder<SubCategory> builder)
        {

            base.Configure(builder);

            builder
                .Property(x => x.Name)
                .IsRequired()
                .HasMaxLength(100);

     

            builder.Property(x => x.CreationTime)
                   .HasDefaultValue(DateTime.Now);

            builder.Property(x => x.IsDeleted)
                   .HasDefaultValue(false);


            //////////////////////////////////////////
            /// FKs
            //////////////////////////////////////////
            ///

            builder
                .HasOne(x =>x.Category)
                .WithMany(x => x.SubCategories)
                .HasForeignKey(x => x.CategoryId);

        }
    }
}
