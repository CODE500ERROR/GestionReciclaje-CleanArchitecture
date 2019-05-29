using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace BaseProject.Persistence.Migrations
{
    public partial class add_description_product : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<DateTime>(
                name: "CreationTime",
                table: "Product",
                nullable: false,
                defaultValue: new DateTime(2019, 5, 28, 22, 13, 45, 753, DateTimeKind.Local).AddTicks(7505),
                oldClrType: typeof(DateTime),
                oldDefaultValue: new DateTime(2019, 5, 27, 22, 23, 31, 10, DateTimeKind.Local).AddTicks(1763));

            migrationBuilder.AddColumn<string>(
                name: "Description",
                table: "Product",
                nullable: true);

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreationTime",
                table: "Plant",
                nullable: false,
                defaultValue: new DateTime(2019, 5, 28, 22, 13, 45, 750, DateTimeKind.Local).AddTicks(1872),
                oldClrType: typeof(DateTime),
                oldDefaultValue: new DateTime(2019, 5, 27, 22, 23, 31, 5, DateTimeKind.Local).AddTicks(5952));

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreationTime",
                table: "Municipio",
                nullable: false,
                defaultValue: new DateTime(2019, 5, 28, 22, 13, 45, 756, DateTimeKind.Local).AddTicks(697),
                oldClrType: typeof(DateTime),
                oldDefaultValue: new DateTime(2019, 5, 27, 22, 23, 31, 12, DateTimeKind.Local).AddTicks(970));

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreationTime",
                table: "Category",
                nullable: false,
                defaultValue: new DateTime(2019, 5, 28, 22, 13, 45, 759, DateTimeKind.Local).AddTicks(1662),
                oldClrType: typeof(DateTime),
                oldDefaultValue: new DateTime(2019, 5, 27, 22, 23, 31, 14, DateTimeKind.Local).AddTicks(3416));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Description",
                table: "Product");

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreationTime",
                table: "Product",
                nullable: false,
                defaultValue: new DateTime(2019, 5, 27, 22, 23, 31, 10, DateTimeKind.Local).AddTicks(1763),
                oldClrType: typeof(DateTime),
                oldDefaultValue: new DateTime(2019, 5, 28, 22, 13, 45, 753, DateTimeKind.Local).AddTicks(7505));

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreationTime",
                table: "Plant",
                nullable: false,
                defaultValue: new DateTime(2019, 5, 27, 22, 23, 31, 5, DateTimeKind.Local).AddTicks(5952),
                oldClrType: typeof(DateTime),
                oldDefaultValue: new DateTime(2019, 5, 28, 22, 13, 45, 750, DateTimeKind.Local).AddTicks(1872));

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreationTime",
                table: "Municipio",
                nullable: false,
                defaultValue: new DateTime(2019, 5, 27, 22, 23, 31, 12, DateTimeKind.Local).AddTicks(970),
                oldClrType: typeof(DateTime),
                oldDefaultValue: new DateTime(2019, 5, 28, 22, 13, 45, 756, DateTimeKind.Local).AddTicks(697));

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreationTime",
                table: "Category",
                nullable: false,
                defaultValue: new DateTime(2019, 5, 27, 22, 23, 31, 14, DateTimeKind.Local).AddTicks(3416),
                oldClrType: typeof(DateTime),
                oldDefaultValue: new DateTime(2019, 5, 28, 22, 13, 45, 759, DateTimeKind.Local).AddTicks(1662));
        }
    }
}
