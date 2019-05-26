using System;
using BaseProject.Domain;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Whoever.Data.EntityFramework;

namespace BaseProject.Persistence.Configurations.Municipio
{
    public class MunicipioConfiguration : BaseEntityTypeConfiguration<BaseProject.Domain.Municipio>
    {

        public override void Configure(EntityTypeBuilder<BaseProject.Domain.Municipio> builder)
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
               .HasMany(x => x.Plants);
        }
    }
}
