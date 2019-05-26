using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace BaseProject.Persistence.Migrations
{
    public partial class muncipiosyplantas : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Factory");

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreationTime",
                table: "Municipio",
                nullable: false,
                defaultValue: new DateTime(2019, 5, 26, 0, 33, 12, 38, DateTimeKind.Local).AddTicks(9391),
                oldClrType: typeof(DateTime),
                oldDefaultValue: new DateTime(2019, 5, 23, 21, 28, 2, 962, DateTimeKind.Local).AddTicks(5348));

            migrationBuilder.CreateTable(
                name: "Plant",
                columns: table => new
                {
                    PlantId = table.Column<Guid>(nullable: false),
                    Name = table.Column<string>(maxLength: 100, nullable: false),
                    Address = table.Column<string>(maxLength: 200, nullable: false),
                    CreationTime = table.Column<DateTime>(nullable: false, defaultValue: new DateTime(2019, 5, 26, 0, 33, 12, 35, DateTimeKind.Local).AddTicks(6527)),
                    IsDeleted = table.Column<bool>(nullable: false, defaultValue: false),
                    MunicipioId = table.Column<Guid>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Plant", x => x.PlantId);
                    table.ForeignKey(
                        name: "FK_Plant_Municipio_MunicipioId",
                        column: x => x.MunicipioId,
                        principalTable: "Municipio",
                        principalColumn: "MunicipioId",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Plant_MunicipioId",
                table: "Plant",
                column: "MunicipioId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Plant");

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreationTime",
                table: "Municipio",
                nullable: false,
                defaultValue: new DateTime(2019, 5, 23, 21, 28, 2, 962, DateTimeKind.Local).AddTicks(5348),
                oldClrType: typeof(DateTime),
                oldDefaultValue: new DateTime(2019, 5, 26, 0, 33, 12, 38, DateTimeKind.Local).AddTicks(9391));

            migrationBuilder.CreateTable(
                name: "Factory",
                columns: table => new
                {
                    FactoryId = table.Column<Guid>(nullable: false),
                    Address = table.Column<string>(maxLength: 200, nullable: false),
                    CreationTime = table.Column<DateTime>(nullable: false, defaultValue: new DateTime(2019, 5, 23, 21, 28, 2, 972, DateTimeKind.Local).AddTicks(6825)),
                    IsDeleted = table.Column<bool>(nullable: false, defaultValue: false),
                    MunicipioId = table.Column<Guid>(nullable: false),
                    Name = table.Column<string>(maxLength: 100, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Factory", x => x.FactoryId);
                    table.ForeignKey(
                        name: "FK_Factory_Municipio_MunicipioId",
                        column: x => x.MunicipioId,
                        principalTable: "Municipio",
                        principalColumn: "MunicipioId",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Factory_MunicipioId",
                table: "Factory",
                column: "MunicipioId");
        }
    }
}
