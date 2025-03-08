using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TodoList.Api.Data;
using TodoList.Api.Models;

namespace TodoList.Api.Controllers;

[Route("api/[controller]")]
[ApiController]
public class TodoListController : ControllerBase
{

    //Inject the DB context here


    //[HttpGet]
    //public async Task<ActionResult<IEnumerable<TodoListModel>>> GetTodoItems()
    //{

    //}


    //[HttpGet("{id}")]
    //public async Task<ActionResult<TodoListModel>> GetTodoItem(int id)
    //{

    //}


    //[HttpPost]
    //public async Task<ActionResult<TodoListModel>> PostTodoItem(TodoListModel todoItem)
    //{

    //}


    //[HttpDelete("{id}")]
    //public async Task<IActionResult> DeleteTodoItem(Guid id)
    //{

    //}

}


//USE THIS FOR THE PUT REQUEST 
/*
private bool TodoItemExists(Guid id)
    {
        return _context.TodoListItems.Any(e => e.Id == id);
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateTodoItem(Guid id, TodoListModel todoItem)
    {
        if (id != todoItem.Id)
        {
            return BadRequest();
        }
        _context.Entry(todoItem).State = EntityState.Modified;
        try
        {
            await _context.SaveChangesAsync();
        }
        catch (DbUpdateConcurrencyException)
        {
            if (!TodoItemExists(id))
            {
                return NotFound();
            }
            else
            {
                throw;
            }
        }
        return NoContent();
    }
*/