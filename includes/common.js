function renderClearIncrementDate(table_id, date_column_name, date_expression) {
    /** 
     * If the table exists, all records from a specific date are deleted. 
     * 
     * @param {string} table_id - Table ID: `<project_name>.<dataset>.<table_name>` 
     * @param {string} date_column_name - Name of the date column. Ideally, the table should be partitioned by this column.
     * @param {string} date_expression - SQL expression to evaluate the date of the records to be deleted.
     * @returns {string} - SQL statements to execute the operation for the input parameters.
     */ 
    return `
        DECLARE table_exists BOOL;

        -- Check if table exists
        SET table_exists = (
            SELECT COUNT(1) FROM ${table_id.split('.')[1]}.INFORMATION_SCHEMA.TABLES WHERE table_name = '${table_id.split('.')[2].slice(0, -1)}'
        ) > 0;

        -- Delete old records for the current processed date
        IF table_exists THEN
            DELETE FROM ${table_id} WHERE ${date_column_name} >= ${date_expression};
        END IF;
    `;
}
module.exports = { renderClearIncrementDate }