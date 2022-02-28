namespace WebApp.Database
{
    public abstract class Table
    {
        public abstract string[] Columns { get; }
        public abstract string Name { get; }
    }
}
