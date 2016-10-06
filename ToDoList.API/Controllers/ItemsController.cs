﻿using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.Http.Description;
using ToDoList.Data;
using ToDoList.Data.Repositories;

namespace ToDoList.API.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class ItemsController : ApiController
    {
        private IItemRepository _itemRepository = null;

        public ItemsController()
        {
            this._itemRepository = new ItemRepository();
        }
        
        public IEnumerable<Item> Get()
        {
            return _itemRepository.GetAll();
        }

        [ResponseType(typeof(Item))]
        public IHttpActionResult PostItem(Item item)
        {
            if (ModelState.IsValid)
            {
                _itemRepository.InsertItem(item);
            }
            return CreatedAtRoute("DefaultApi", new { item.Id }, item);
        }
    }
}