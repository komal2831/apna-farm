export default (app) => {
  app.post(
    `/tenant/:tenantId/farming`,
    require('./farmingCreate').default,
  );
  app.put(
    `/tenant/:tenantId/farming/:id`,
    require('./farmingUpdate').default,
  );
  app.post(
    `/tenant/:tenantId/farming/import`,
    require('./farmingImport').default,
  );
  app.delete(
    `/tenant/:tenantId/farming`,
    require('./farmingDestroy').default,
  );
  app.get(
    `/tenant/:tenantId/farming/autocomplete`,
    require('./farmingAutocomplete').default,
  );
  app.get(
    `/tenant/:tenantId/farming`,
    require('./farmingList').default,
  );
  app.get(
    `/tenant/:tenantId/farming/:id`,
    require('./farmingFind').default,
  );
};
