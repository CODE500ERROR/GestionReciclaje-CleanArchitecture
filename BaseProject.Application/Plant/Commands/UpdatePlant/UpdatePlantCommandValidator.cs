
using FluentValidation;
using BaseProject.Application.Infrastructure.Request.Commands.Update;
using BaseProject.Application.Users.Commands.UpdateUser;

namespace BaseProject.Application.Plant.Commands.UpdatePlant
{

    public class UpdatePlantCommandValidator : UpdateCommandValidator<UpdatePlantCommand>
    {
        public UpdatePlantCommandValidator() 
        {
            RuleFor(v => v.Address).NotEmpty();            
            RuleFor(v => v.Name).NotEmpty();
            RuleFor(v => v.MunicipioId).NotEmpty();
        }
    }
}
