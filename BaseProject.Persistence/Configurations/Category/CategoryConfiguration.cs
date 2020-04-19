using System;
using BaseProject.Domain;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Whoever.Data.EntityFramework;

namespace BaseProject.Persistence.Configurations.CategoryConfiguration
{
    public class CategoryConfiguration : BaseEntityTypeConfiguration<Category>
    {

        public override void Configure(EntityTypeBuilder<Category> builder)
        {
            base.Configure(builder);

            builder
                .Property(x => x.Name)
                .IsRequired()
                .HasMaxLength(100);
          

            builder.Property(x => x.IsDeleted)
                .HasDefaultValue(false);

            //////////////////////////////////////////
            /// FKs
            //////////////////////////////////////////
            ///
            builder
                .HasMany(x=>x.Children)
                .WithOne(x => x.Parent)
                .HasForeignKey(x=>x.ParentId);

            builder
                    .HasMany(x => x.Products);
                    
        }
    }
}
