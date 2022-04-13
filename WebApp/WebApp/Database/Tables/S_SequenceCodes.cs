namespace WebApp.Database.Tables
{
    /// <summary>
    /// This class is meant to represent the Sequence Code table in our database
    /// This would help us generate new id's by remembering which id was used last
    /// This has NOT been implemented in our project yet
    /// </summary>
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
