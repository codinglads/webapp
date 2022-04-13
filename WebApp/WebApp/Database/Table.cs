namespace WebApp.Database
{
    /// <summary>
    /// This abstract class represents the basic layout of what the table classes should
    /// implement in their objects. These items will be useful in building the database
    /// </summary>
    public abstract class Table
    {
        public abstract string[] Columns { get; }
        public abstract string Name { get; }
    }
}
