﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ToDoList.Data.Repositories
{
    public interface IItemRepository
    {
        IEnumerable<Item> GetAllItems();
        void InsertItem(Item item); 
    }                                       
}
