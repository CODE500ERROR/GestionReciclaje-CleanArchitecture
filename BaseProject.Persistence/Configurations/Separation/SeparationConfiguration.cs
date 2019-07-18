using System;
using System.Collections.Generic;
using System.Text;
using BaseProject.Domain;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Whoever.Data.EntityFramework;

namespace BaseProject.Persistence.Configurations.Plant
{
    public class SeparationConfiguration : BaseEntityTypeConfiguration<Separation>
    {

        public override void Configure(EntityTypeBuilder<Separation> builder)
        {

            base.Configure(builder);

            builder
                   .Property(x => x.IsDeleted)
                   .HasDefaultValue(false);

            builder
                 .Property(x => x.CreationTime)
                 .HasDefaultValue(DateTime.Now);

            builder
                  .HasOne(x => x.Plant)
                  .WithMany(x => x.Separations)
                  .HasForeignKey(x => x.PlantId);

            builder
                .HasOne(x => x.Product)
                .WithMany(x => x.Separations)
                .HasForeignKey(x => x.ProductId);

        }
    }
}
