using BaseProject.Application.Plant.CreatePlant;
using FluentValidation;

namespace BaseProject.Application.Separation.Commands
{
    public abstract class CreateSeparationCommandValidator<TCommand> : AbstractValidator<TCommand>
        where TCommand : CreateSeparationCommand
    {
        public CreateSeparationCommandValidator()
        {
            RuleFor(v => v.Description).NotEmpty().NotNull();
            RuleFor(v => v.ProductId).NotEmpty().NotNull();
            RuleFor(v => v.MeasuresUnit).NotEmpty().NotNull();
            RuleFor(v => v.Quantity).NotEmpty().NotNull();
        }
    }
}
