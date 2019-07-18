using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace BaseProject.Persistence.Migrations
{
    public partial class separtionentity : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<DateTime>(
                name: "CreationTime",
                table: "Product",
                nullable: false,
                defaultValue: new DateTime(2019, 7, 18, 17, 0, 28, 15, DateTimeKind.Local).AddTicks(989),
                oldClrType: typeof(DateTime),
                oldDefaultValue: new DateTime(2019, 5, 29, 21, 26, 28, 320, DateTimeKind.Local).AddTicks(8719));

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreationTime",
                table: "Plant",
                nullable: false,
                defaultValue: new DateTime(2019, 7, 18, 17, 0, 28, 8, DateTimeKind.Local).AddTicks(6822),
                oldClrType: typeof(DateTime),
                oldDefaultValue: new DateTime(2019, 5, 29, 21, 26, 28, 314, DateTimeKind.Local).AddTicks(3369));

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreationTime",
                table: "Municipio",
                nullable: false,
                defaultValue: new DateTime(2019, 7, 18, 17, 0, 28, 23, DateTimeKind.Local).AddTicks(5839),
                oldClrType: typeof(DateTime),
                oldDefaultValue: new DateTime(2019, 5, 29, 21, 26, 28, 322, DateTimeKind.Local).AddTicks(9380));

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreationTime",
                table: "Category",
                nullable: false,
                defaultValue: new DateTime(2019, 7, 18, 17, 0, 28, 27, DateTimeKind.Local).AddTicks(284),
                oldClrType: typeof(DateTime),
                oldDefaultValue: new DateTime(2019, 5, 29, 21, 26, 28, 324, DateTimeKind.Local).AddTicks(9376));

            migrationBuilder.CreateTable(
                name: "Separation",
                columns: table => new
                {
                    SeparationId = table.Column<Guid>(nullable: false),
                    Description = table.Column<string>(nullable: true),
                    ProductId = table.Column<Guid>(nullable: false),
                    PlantId = table.Column<Guid>(nullable: false),
                    Quantity = table.Column<double>(nullable: false),
                    MeasuresUnit = table.Column<string>(nullable: true),
                    CreationTime = table.Column<DateTime>(nullable: false, defaultValue: new DateTime(2019, 7, 18, 17, 0, 28, 19, DateTimeKind.Local).AddTicks(6545)),
                    IsDeleted = table.Column<bool>(nullable: false, defaultValue: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Separation", x => x.SeparationId);
                    table.ForeignKey(
                        name: "FK_Separation_Plant_PlantId",
                        column: x => x.PlantId,
                        principalTable: "Plant",
                        principalColumn: "PlantId",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Separation_Product_ProductId",
                        column: x => x.ProductId,
                        principalTable: "Product",
                        principalColumn: "ProductId",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Separation_PlantId",
                table: "Separation",
                column: "PlantId");

            migrationBuilder.CreateIndex(
                name: "IX_Separation_ProductId",
                table: "Separation",
                column: "ProductId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Separation");

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreationTime",
                table: "Product",
                nullable: false,
                defaultValue: new DateTime(2019, 5, 29, 21, 26, 28, 320, DateTimeKind.Local).AddTicks(8719),
                oldClrType: typeof(DateTime),
                oldDefaultValue: new DateTime(2019, 7, 18, 17, 0, 28, 15, DateTimeKind.Local).AddTicks(989));

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreationTime",
                table: "Plant",
                nullable: false,
                defaultValue: new DateTime(2019, 5, 29, 21, 26, 28, 314, DateTimeKind.Local).AddTicks(3369),
                oldClrType: typeof(DateTime),
                oldDefaultValue: new DateTime(2019, 7, 18, 17, 0, 28, 8, DateTimeKind.Local).AddTicks(6822));

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreationTime",
                table: "Municipio",
                nullable: false,
                defaultValue: new DateTime(2019, 5, 29, 21, 26, 28, 322, DateTimeKind.Local).AddTicks(9380),
                oldClrType: typeof(DateTime),
                oldDefaultValue: new DateTime(2019, 7, 18, 17, 0, 28, 23, DateTimeKind.Local).AddTicks(5839));

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreationTime",
                table: "Category",
                nullable: false,
                defaultValue: new DateTime(2019, 5, 29, 21, 26, 28, 324, DateTimeKind.Local).AddTicks(9376),
                oldClrType: typeof(DateTime),
                oldDefaultValue: new DateTime(2019, 7, 18, 17, 0, 28, 27, DateTimeKind.Local).AddTicks(284));
        }
    }
}
