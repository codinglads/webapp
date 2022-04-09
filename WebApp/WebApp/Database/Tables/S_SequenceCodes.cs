namespace WebApp.Database.Tables
{
    public class S_SequenceCodes : Table
    {
        private const string tableName = "tableName varchar(50)";
        private const string newestID = "newestID int";

        #region Column Indexes

        public const int _tableName_ = 0;
        public const int _newestID_ = 1;

        #endregion

        public override string Name
        {
            get
            {
                return "S_SequenceCodes";
            }
        }

        public override string[] Columns
        {
            get
            {
                return new string[]
                {
                    tableName, newestID
                };
            }
        }
    }
}
