using BaseProject.Application.Plant.CreatePlant;
using FluentValidation;

namespace BaseProject.Application.Product.Commands.CreateProduct
{
    public abstract class CreateProductCommandValidator<TCommand> : AbstractValidator<TCommand>
        where TCommand : CreateProductCommand
    {
        public CreateProductCommandValidator()
        {
            RuleFor(v => v.Name).NotEmpty();
            RuleFor(v => v.CategoryId).NotEmpty();
        }
    }
}
