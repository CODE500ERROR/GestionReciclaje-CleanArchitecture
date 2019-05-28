using System;
using System.Collections.Generic;
using System.Text;
using BaseProject.Domain;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Whoever.Data.EntityFramework;

namespace BaseProject.Persistence.Configurations.Plant
{
    public class ProductConfiguration : BaseEntityTypeConfiguration<Product>
    {

        public override void Configure(EntityTypeBuilder<Product> builder)
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
                .WithMany(x => x.Products)
                .HasForeignKey(x => x.CategoryId);

        }
    }
}
