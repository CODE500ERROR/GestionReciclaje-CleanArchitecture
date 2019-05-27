using BaseProject.Application.Plant.CreatePlant;
using FluentValidation;

namespace BaseProject.Application.Category.Commands.CreateSubCategory
{
    public abstract class CreateSubCategoryCommandValidator<TCommand> : AbstractValidator<TCommand>
        where TCommand : CreateSubCategoryCommand
    {
        public CreateSubCategoryCommandValidator()
        {
            RuleFor(v => v.Name).NotEmpty();
            RuleFor(v => v.CategoryId).NotEmpty();

        }
    }
}
