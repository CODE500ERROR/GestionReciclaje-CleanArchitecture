
using FluentValidation;
using BaseProject.Application.Infrastructure.Request.Commands.Update;
using BaseProject.Application.Users.Commands.UpdateUser;

namespace BaseProject.Application.Separation.Commands
{

    public class UpdateSepartionCommandValidator : UpdateCommandValidator<UpdateSeparationCommand>
    {
        public UpdateSepartionCommandValidator() 
        {
            RuleFor(v => v.Description).NotEmpty().NotNull();
            RuleFor(v => v.ProductId).NotEmpty().NotNull();
            RuleFor(v => v.MeasuresUnit).NotEmpty().NotNull();
            RuleFor(v => v.Quantity).NotEmpty().NotNull();
        }
    }
}
