using Microsoft.EntityFrameworkCore.Migrations;

namespace BaseProject.Persistence.Migrations
{
    public partial class AddLatLongToPlantFloat : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<float>(
                name: "Latitude",
                table: "Plant",
                nullable: false,
                defaultValue: 0f);

            migrationBuilder.AddColumn<float>(
                name: "Longitude",
                table: "Plant",
                nullable: false,
                defaultValue: 0f);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Latitude",
                table: "Plant");

            migrationBuilder.DropColumn(
                name: "Longitude",
                table: "Plant");
        }
    }
}
