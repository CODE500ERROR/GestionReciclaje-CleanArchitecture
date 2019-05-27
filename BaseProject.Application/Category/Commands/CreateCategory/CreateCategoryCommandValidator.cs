using BaseProject.Application.Plant.CreatePlant;
using FluentValidation;

namespace BaseProject.Application.Category.Commands.CreateCategory
{
    public abstract class CreateCategoryCommandValidator<TCommand> : AbstractValidator<TCommand>
        where TCommand : CreateCategoryCommand
    {
        public CreateCategoryCommandValidator()
        {
            RuleFor(v => v.Name).NotEmpty();
        }
    }
}
