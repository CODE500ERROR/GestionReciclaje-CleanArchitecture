using System;
using System.Collections.Generic;
using System.Net;
using System.Threading.Tasks;
using BaseProject.Application.Category.Commands.CreateCategory;
using BaseProject.Application.Category.Commands.DeleteCategory;
using BaseProject.Application.Category.Commands.UpdateCategory;
using BaseProject.Application.Category.Queries.GetAllCategories;
using BaseProject.Application.Category.Queries.GetAllCategoryParent;
using BaseProject.Application.Category.Queries.GetCategoryByParent;
using BaseProject.Application.Category.Queries.GetCategoryDetail;
using BaseProject.Application.Roles;
using BaseProject.Application.Roles.GetAllRoles;
using BaseProject.Application.Users.Commands.UpdateUser;
using BaseProject.Application.Users.Queries.GetAllUsers;
using BaseProject.Domain.Constants;
using BaseProject.WebApi.Common;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BaseProject.WebApi.Controller
{

    [Authorize(Policy  = "RequiredAdminRole")]
    public class CategoryController : BaseController
    {
        /// <summary>
        /// Get all roles.
        /// </summary>
        /// <param name="query"></param>
        /// <returns></returns>
        [HttpGet]
       
        [ProducesResponseType(StatusCodes.Status200OK)]
        public async Task<ActionResult<CategoryListViewModel>> GetAll([FromQuery] GetCategoryListQuery query)
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

        public async Task<ActionResult<int>> Create([FromBody] CreateCategoryCommand command)
        {
            return Ok(await Mediator.Send(command));
        }


        /// <summary>
        /// Get category by id.
        /// </summary>
        /// <returns></returns>
        [HttpGet("{id}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public async Task<ActionResult<CategoryDetailModel>> Get(Guid id)
        {
            return Ok(await Mediator.Send(new GetCategoryDetailQuery { CategoryId = id }));
        }


        /// delete user.
        /// </summary>
        /// <returns></returns>
        [HttpDelete("{id}")]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesDefaultResponseType]
        public async Task<IActionResult> Delete(Guid id)
        {
            await Mediator.Send(new DeleteCategoryCommand { CategoryId = id });
            return NoContent();
        }


        /// update user.
        /// </summary>
        /// <returns></returns>
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesDefaultResponseType]
        public async Task<IActionResult> Update([FromBody]UpdateCategoryCommand command)
        {
            await Mediator.Send(command);
            return NoContent();
        }


        /// <summary>
        /// Get all category parents.
        /// </summary>
        /// <returns></returns>
        [HttpGet("GetAllParent")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public async Task<ActionResult<CategoryParentListViewModel>> GetAllParent()
        {
            return Ok(await Mediator.Send(new GetCategoryParentListQuery()));
        }


        /// <summary>
        /// Get category by parentid.
        /// </summary>
        /// <returns></returns>
        [HttpGet("GetCategoryByParent/{parentId}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public async Task<ActionResult<CategoryDetailModel>> GetCategoryByParent(string parentId)
        {
            return Ok(await Mediator.Send(new GetChildrenListQuery { ParentId = Guid.Parse(parentId) }));
        }

    }
}
