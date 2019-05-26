using BaseProject.Application.Plant.CreatePlant;
using FluentValidation;

namespace BaseProject.Application.CreatePlant
{
    public abstract class CreatePlantCommandValidator<TCommand> : AbstractValidator<TCommand>
        where TCommand : CreatePlantCommand
    {
        public CreatePlantCommandValidator()
        {
            RuleFor(v => v.Name).NotEmpty();
            RuleFor(v => v.Address).NotEmpty();
            RuleFor(v => v.MunicipioId).NotEmpty();
        }
    }
}
