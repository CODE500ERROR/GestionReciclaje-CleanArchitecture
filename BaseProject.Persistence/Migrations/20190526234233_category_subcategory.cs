using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace BaseProject.Persistence.Migrations
{
    public partial class category_subcategory : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<DateTime>(
                name: "CreationTime",
                table: "Plant",
                nullable: false,
                defaultValue: new DateTime(2019, 5, 26, 20, 42, 33, 68, DateTimeKind.Local).AddTicks(3878),
                oldClrType: typeof(DateTime),
                oldDefaultValue: new DateTime(2019, 5, 26, 20, 32, 28, 832, DateTimeKind.Local).AddTicks(5295));

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreationTime",
                table: "Municipio",
                nullable: false,
                defaultValue: new DateTime(2019, 5, 26, 20, 42, 33, 73, DateTimeKind.Local).AddTicks(8623),
                oldClrType: typeof(DateTime),
                oldDefaultValue: new DateTime(2019, 5, 26, 20, 32, 28, 844, DateTimeKind.Local).AddTicks(181));

            migrationBuilder.CreateTable(
                name: "Category",
                columns: table => new
                {
                    CategoryId = table.Column<Guid>(nullable: false),
                    Name = table.Column<string>(maxLength: 100, nullable: false),
                    IsDeleted = table.Column<bool>(nullable: false, defaultValue: false),
                    CreationTime = table.Column<DateTime>(nullable: false, defaultValue: new DateTime(2019, 5, 26, 20, 42, 33, 78, DateTimeKind.Local).AddTicks(6223))
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Category", x => x.CategoryId);
                });

            migrationBuilder.CreateTable(
                name: "SubCategory",
                columns: table => new
                {
                    SubCategoryId = table.Column<Guid>(nullable: false),
                    Name = table.Column<string>(maxLength: 100, nullable: false),
                    IsDeleted = table.Column<bool>(nullable: false, defaultValue: false),
                    CreationTime = table.Column<DateTime>(nullable: false, defaultValue: new DateTime(2019, 5, 26, 20, 42, 33, 57, DateTimeKind.Local).AddTicks(5289)),
                    CategoryId = table.Column<Guid>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SubCategory", x => x.SubCategoryId);
                    table.ForeignKey(
                        name: "FK_SubCategory_Category_CategoryId",
                        column: x => x.CategoryId,
                        principalTable: "Category",
                        principalColumn: "CategoryId",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_SubCategory_CategoryId",
                table: "SubCategory",
                column: "CategoryId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "SubCategory");

            migrationBuilder.DropTable(
                name: "Category");

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreationTime",
                table: "Plant",
                nullable: false,
                defaultValue: new DateTime(2019, 5, 26, 20, 32, 28, 832, DateTimeKind.Local).AddTicks(5295),
                oldClrType: typeof(DateTime),
                oldDefaultValue: new DateTime(2019, 5, 26, 20, 42, 33, 68, DateTimeKind.Local).AddTicks(3878));

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreationTime",
                table: "Municipio",
                nullable: false,
                defaultValue: new DateTime(2019, 5, 26, 20, 32, 28, 844, DateTimeKind.Local).AddTicks(181),
                oldClrType: typeof(DateTime),
                oldDefaultValue: new DateTime(2019, 5, 26, 20, 42, 33, 73, DateTimeKind.Local).AddTicks(8623));
        }
    }
}
