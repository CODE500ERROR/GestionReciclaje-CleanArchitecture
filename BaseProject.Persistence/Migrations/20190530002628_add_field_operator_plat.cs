using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace BaseProject.Persistence.Migrations
{
    public partial class add_field_operator_plat : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<DateTime>(
                name: "CreationTime",
                table: "Product",
                nullable: false,
                defaultValue: new DateTime(2019, 5, 29, 21, 26, 28, 320, DateTimeKind.Local).AddTicks(8719),
                oldClrType: typeof(DateTime),
                oldDefaultValue: new DateTime(2019, 5, 28, 23, 40, 20, 71, DateTimeKind.Local).AddTicks(4423));

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreationTime",
                table: "Plant",
                nullable: false,
                defaultValue: new DateTime(2019, 5, 29, 21, 26, 28, 314, DateTimeKind.Local).AddTicks(3369),
                oldClrType: typeof(DateTime),
                oldDefaultValue: new DateTime(2019, 5, 28, 23, 40, 20, 67, DateTimeKind.Local).AddTicks(8353));

            migrationBuilder.AddColumn<int>(
                name: "OperatorsQuantity",
                table: "Plant",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreationTime",
                table: "Municipio",
                nullable: false,
                defaultValue: new DateTime(2019, 5, 29, 21, 26, 28, 322, DateTimeKind.Local).AddTicks(9380),
                oldClrType: typeof(DateTime),
                oldDefaultValue: new DateTime(2019, 5, 28, 23, 40, 20, 73, DateTimeKind.Local).AddTicks(2784));

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreationTime",
                table: "Category",
                nullable: false,
                defaultValue: new DateTime(2019, 5, 29, 21, 26, 28, 324, DateTimeKind.Local).AddTicks(9376),
                oldClrType: typeof(DateTime),
                oldDefaultValue: new DateTime(2019, 5, 28, 23, 40, 20, 75, DateTimeKind.Local).AddTicks(168));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "OperatorsQuantity",
                table: "Plant");

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreationTime",
                table: "Product",
                nullable: false,
                defaultValue: new DateTime(2019, 5, 28, 23, 40, 20, 71, DateTimeKind.Local).AddTicks(4423),
                oldClrType: typeof(DateTime),
                oldDefaultValue: new DateTime(2019, 5, 29, 21, 26, 28, 320, DateTimeKind.Local).AddTicks(8719));

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreationTime",
                table: "Plant",
                nullable: false,
                defaultValue: new DateTime(2019, 5, 28, 23, 40, 20, 67, DateTimeKind.Local).AddTicks(8353),
                oldClrType: typeof(DateTime),
                oldDefaultValue: new DateTime(2019, 5, 29, 21, 26, 28, 314, DateTimeKind.Local).AddTicks(3369));

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreationTime",
                table: "Municipio",
                nullable: false,
                defaultValue: new DateTime(2019, 5, 28, 23, 40, 20, 73, DateTimeKind.Local).AddTicks(2784),
                oldClrType: typeof(DateTime),
                oldDefaultValue: new DateTime(2019, 5, 29, 21, 26, 28, 322, DateTimeKind.Local).AddTicks(9380));

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreationTime",
                table: "Category",
                nullable: false,
                defaultValue: new DateTime(2019, 5, 28, 23, 40, 20, 75, DateTimeKind.Local).AddTicks(168),
                oldClrType: typeof(DateTime),
                oldDefaultValue: new DateTime(2019, 5, 29, 21, 26, 28, 324, DateTimeKind.Local).AddTicks(9376));
        }
    }
}
