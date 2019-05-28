
using FluentValidation;
using BaseProject.Application.Infrastructure.Request.Commands.Update;
using BaseProject.Application.Users.Commands.UpdateUser;

namespace BaseProject.Application.Product.Commands.UpdateProduct
{

    public class UpdateProductCommandValidator : UpdateCommandValidator<UpdateProductCommand>
    {
        public UpdateProductCommandValidator() 
        {
            RuleFor(v => v.Name).NotEmpty();
            RuleFor(v => v.CategoryId).NotEmpty();
        }
    }
}
