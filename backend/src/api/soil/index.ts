export default (app) => {
  app.post(
    `/tenant/:tenantId/soil`,
    require('./soilCreate').default,
  );
  app.put(
    `/tenant/:tenantId/soil/:id`,
    require('./soilUpdate').default,
  );
  app.post(
    `/tenant/:tenantId/soil/import`,
    require('./soilImport').default,
  );
  app.delete(
    `/tenant/:tenantId/soil`,
    require('./soilDestroy').default,
  );
  app.get(
    `/tenant/:tenantId/soil/autocomplete`,
    require('./soilAutocomplete').default,
  );
  app.get(
    `/tenant/:tenantId/soil`,
    require('./soilList').default,
  );
  app.get(
    `/tenant/:tenantId/soil/:id`,
    require('./soilFind').default,
  );
};
