using Microsoft.EntityFrameworkCore.Migrations;

namespace BaseProject.Persistence.Migrations
{
    public partial class RemoveLongLatToPlant : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Latitude",
                table: "Plant");

            migrationBuilder.DropColumn(
                name: "Longitude",
                table: "Plant");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<long>(
                name: "Latitude",
                table: "Plant",
                nullable: false,
                defaultValue: 0L);

            migrationBuilder.AddColumn<long>(
                name: "Longitude",
                table: "Plant",
                nullable: false,
                defaultValue: 0L);
        }
    }
}
