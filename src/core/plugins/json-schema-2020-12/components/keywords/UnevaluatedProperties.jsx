/**
 * @prettier
 */
import React from "react"

import { schema } from "../../prop-types"
import { useFn, useComponent } from "../../hooks"

const UnevaluatedProperties = ({ schema }) => {
  const fn = useFn()

  if (!fn.hasKeyword(schema, "unevaluatedProperties")) return null

  const { unevaluatedProperties } = schema
  const JSONSchema = useComponent("JSONSchema")
  const name = (
    <span className="json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--primary">
      Unevaluated properties
    </span>
  )

  return (
    <div className="json-schema-2020-12-keyword json-schema-2020-12-keyword--unevaluatedProperties">
      <JSONSchema name={name} schema={unevaluatedProperties} />
    </div>
  )
}

UnevaluatedProperties.propTypes = {
  schema: schema.isRequired,
}

export default UnevaluatedProperties