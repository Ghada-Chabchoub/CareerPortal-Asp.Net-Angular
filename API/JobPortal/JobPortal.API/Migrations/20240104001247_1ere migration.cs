using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace JobPortal.API.Migrations
{
    public partial class _1eremigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Candidatures",
                columns: table => new
                {
                    ID_Candidature = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Title = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Company_name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    PNom = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    PPrenom = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    PEmail = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    PPhone = table.Column<int>(type: "int", nullable: false),
                    PLocation = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    PDegree = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    PImageUrl = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    PMajor = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    PAge = table.Column<int>(type: "int", nullable: false),
                    PDescription = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Etat_Candidature = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Candidatures", x => x.ID_Candidature);
                });

            migrationBuilder.CreateTable(
                name: "Offers",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Title = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Location = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Min_salary = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Max_salary = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Imageurl = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Category = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Job_nature = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Job_location = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Company_name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Visible = table.Column<bool>(type: "bit", nullable: false),
                    Author = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    PublishDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    UpdateDate = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Offers", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Profils",
                columns: table => new
                {
                    ID_Profil = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Nom = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Prenom = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Phone = table.Column<int>(type: "int", nullable: false),
                    Location = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Degree = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ImageUrl = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Major = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Age = table.Column<int>(type: "int", nullable: false),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Profils", x => x.ID_Profil);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Candidatures");

            migrationBuilder.DropTable(
                name: "Offers");

            migrationBuilder.DropTable(
                name: "Profils");
        }
    }
}
