using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ToDoList.Data.Repositories
{
    public interface ILabelRepository
    {
        IEnumerable<Label> GetLabels();
        Label GetLabelById(int id);
        void InsertLabel(Label label);
        void UpdateLabel(Label label);
        void DeleteLabel(Label label);
        void Save();
        IEnumerable<Item> GetLabelsHaveItemById(int labelId);
    }
}
