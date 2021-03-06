export default (app) => {
  app.post(
    `/tenant/:tenantId/farming-method`,
    require('./farmingMethodCreate').default,
  );
  app.put(
    `/tenant/:tenantId/farming-method/:id`,
    require('./farmingMethodUpdate').default,
  );
  app.post(
    `/tenant/:tenantId/farming-method/import`,
    require('./farmingMethodImport').default,
  );
  app.delete(
    `/tenant/:tenantId/farming-method`,
    require('./farmingMethodDestroy').default,
  );
  app.get(
    `/tenant/:tenantId/farming-method/autocomplete`,
    require('./farmingMethodAutocomplete').default,
  );
  app.get(
    `/tenant/:tenantId/farming-method`,
    require('./farmingMethodList').default,
  );
  app.get(
    `/tenant/:tenantId/farming-method/:id`,
    require('./farmingMethodFind').default,
  );
};
