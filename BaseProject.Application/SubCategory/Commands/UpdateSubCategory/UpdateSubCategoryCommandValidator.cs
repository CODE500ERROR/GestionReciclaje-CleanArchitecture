
using FluentValidation;
using BaseProject.Application.Infrastructure.Request.Commands.Update;
using BaseProject.Application.Users.Commands.UpdateUser;

namespace BaseProject.Application.Category.Commands.UpdateSubCategory
{

    public class UpdateSubCategoryCommandValidator : UpdateCommandValidator<UpdateSubCategoryCommand>
    {
        public UpdateSubCategoryCommandValidator() 
        {            
            RuleFor(v => v.Name).NotEmpty();
            RuleFor(v => v.CategoryId).NotEmpty();
        }
    }
}
