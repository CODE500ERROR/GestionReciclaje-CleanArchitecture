using System;
using System.Collections.Generic;
using System.Net;
using System.Threading.Tasks;
using BaseProject.Application.Plant.Commands.DeletePlant;
using BaseProject.Application.Product.Commands.CreateProduct;

using BaseProject.Application.Product.Commands.UpdateProduct;

using BaseProject.Application.Product.Queries.GetAllProduct;

using BaseProject.Application.Product.Queries.GetProductDetail;
using BaseProject.Application.Roles;
using BaseProject.Application.Roles.GetAllRoles;
using BaseProject.Application.Users.Commands.UpdateUser;
using BaseProject.Application.Users.Queries.GetAllUsers;
using BaseProject.WebApi.Common;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BaseProject.WebApi.Controller
{
    [Authorize(Policy = "RequiredOperator")]
    public class ProductController : BaseController
    {
        /// <summary>
        /// Get all roles.
        /// </summary>
        /// <param name="query"></param>
        /// <returns></returns>
        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public async Task<ActionResult<ProductListViewModel>> GetAll([FromQuery] GetProductListQuery query)
        {
            return Ok(await Mediator.Send(query));
        }

        /// <summary>
        /// Get all roles.
        /// </summary>
        /// <param name="command"></param>
        /// <returns></returns>
        [HttpPost("Create")]
        [ProducesResponseType(StatusCodes.Status201Created)]
        [ProducesDefaultResponseType]
        public async Task<ActionResult<int>> Create([FromBody] CreateProductCommand command)
        {
            return Ok(await Mediator.Send(command));
        }


        /// <summary>
        /// Get user by id.
        /// </summary>
        /// <returns></returns>
        [HttpGet("{id}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public async Task<ActionResult<ProductDetailModel>> Get(Guid id)
        {
            return Ok(await Mediator.Send(new GetProductDetailQuery { ProductId = id }));
        }


        /// delete user.
        /// </summary>
        /// <returns></returns>
        [HttpDelete("{id}")]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesDefaultResponseType]
        public async Task<IActionResult> Delete(Guid id)
        {
            await Mediator.Send(new DeleteProductCommand { ProductId = id });
            return NoContent();
        }


        /// update user.
        /// </summary>
        /// <returns></returns>
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesDefaultResponseType]
        public async Task<IActionResult> Update([FromBody]UpdateProductCommand command)
        {
            await Mediator.Send(command);
            return NoContent();
        }



    }
}
