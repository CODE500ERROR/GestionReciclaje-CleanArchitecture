using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace BaseProject.Persistence.Migrations
{
    public partial class AddSeparationDate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<DateTime>(
                name: "SeparationDate",
                table: "Separation",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "SeparationDate",
                table: "Separation");
        }
    }
}
