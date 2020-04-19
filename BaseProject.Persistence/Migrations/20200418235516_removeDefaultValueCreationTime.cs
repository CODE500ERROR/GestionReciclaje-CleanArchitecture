using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace BaseProject.Persistence.Migrations
{
    public partial class removeDefaultValueCreationTime : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<DateTime>(
                name: "CreationTime",
                table: "Separation",
                nullable: false,
                oldClrType: typeof(DateTime),
                oldDefaultValue: new DateTime(2019, 7, 18, 17, 0, 28, 19, DateTimeKind.Local).AddTicks(6545));

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreationTime",
                table: "Product",
                nullable: false,
                oldClrType: typeof(DateTime),
                oldDefaultValue: new DateTime(2019, 7, 18, 17, 0, 28, 15, DateTimeKind.Local).AddTicks(989));

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreationTime",
                table: "Plant",
                nullable: false,
                oldClrType: typeof(DateTime),
                oldDefaultValue: new DateTime(2019, 7, 18, 17, 0, 28, 8, DateTimeKind.Local).AddTicks(6822));

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreationTime",
                table: "Municipio",
                nullable: false,
                oldClrType: typeof(DateTime),
                oldDefaultValue: new DateTime(2019, 7, 18, 17, 0, 28, 23, DateTimeKind.Local).AddTicks(5839));

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreationTime",
                table: "Category",
                nullable: false,
                oldClrType: typeof(DateTime),
                oldDefaultValue: new DateTime(2019, 7, 18, 17, 0, 28, 27, DateTimeKind.Local).AddTicks(284));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<DateTime>(
                name: "CreationTime",
                table: "Separation",
                nullable: false,
                defaultValue: new DateTime(2019, 7, 18, 17, 0, 28, 19, DateTimeKind.Local).AddTicks(6545),
                oldClrType: typeof(DateTime));

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreationTime",
                table: "Product",
                nullable: false,
                defaultValue: new DateTime(2019, 7, 18, 17, 0, 28, 15, DateTimeKind.Local).AddTicks(989),
                oldClrType: typeof(DateTime));

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreationTime",
                table: "Plant",
                nullable: false,
                defaultValue: new DateTime(2019, 7, 18, 17, 0, 28, 8, DateTimeKind.Local).AddTicks(6822),
                oldClrType: typeof(DateTime));

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreationTime",
                table: "Municipio",
                nullable: false,
                defaultValue: new DateTime(2019, 7, 18, 17, 0, 28, 23, DateTimeKind.Local).AddTicks(5839),
                oldClrType: typeof(DateTime));

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreationTime",
                table: "Category",
                nullable: false,
                defaultValue: new DateTime(2019, 7, 18, 17, 0, 28, 27, DateTimeKind.Local).AddTicks(284),
                oldClrType: typeof(DateTime));
        }
    }
}
