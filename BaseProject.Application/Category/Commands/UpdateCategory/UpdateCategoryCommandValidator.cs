
using FluentValidation;
using BaseProject.Application.Infrastructure.Request.Commands.Update;
using BaseProject.Application.Users.Commands.UpdateUser;

namespace BaseProject.Application.Category.Commands.UpdateCategory
{

    public class UpdateCategoryCommandValidator : UpdateCommandValidator<UpdateCategoryCommand>
    {
        public UpdateCategoryCommandValidator() 
        {            
            RuleFor(v => v.Name).NotEmpty();
        }
    }
}
