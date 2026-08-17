const current_timestamp_utc = 'current_timestamp_utc' in dataform.projectConfig.vars && dataform.projectConfig.vars.current_timestamp_utc != '' 
    ? "'" + dataform.projectConfig.vars.current_timestamp_utc + "'" : 'CURRENT_TIMESTAMP()';
    
module.exports = { current_timestamp_utc };