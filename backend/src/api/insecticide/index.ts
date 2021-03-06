export default (app) => {
  app.post(
    `/tenant/:tenantId/insecticide`,
    require('./insecticideCreate').default,
  );
  app.put(
    `/tenant/:tenantId/insecticide/:id`,
    require('./insecticideUpdate').default,
  );
  app.post(
    `/tenant/:tenantId/insecticide/import`,
    require('./insecticideImport').default,
  );
  app.delete(
    `/tenant/:tenantId/insecticide`,
    require('./insecticideDestroy').default,
  );
  app.get(
    `/tenant/:tenantId/insecticide/autocomplete`,
    require('./insecticideAutocomplete').default,
  );
  app.get(
    `/tenant/:tenantId/insecticide`,
    require('./insecticideList').default,
  );
  app.get(
    `/tenant/:tenantId/insecticide/:id`,
    require('./insecticideFind').default,
  );
};
